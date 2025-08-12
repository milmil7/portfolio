import React from "react";
import { motion } from "framer-motion";

const AbyssBasePage = () => {
    const sections = [
        {
            title: "AbyssBase: A Simple File-Based Database in Rust",
            content: (
                <>
                    <p className="mt-2 text-gray-700">
                        AbyssBase is a lightweight, file-based database engine written in
                        Rust. It provides basic CRUD (Create, Read, Update, Delete)
                        operations, migrations, and a query builder, all using the
                        filesystem for storage. AbyssBase is designed for learning,
                        prototyping, and small-scale applications where a full database
                        server is unnecessary.
                    </p>
                    <hr className="my-6 border-gray-300" />
                </>
            ),
        },
        {
            title: "Features",
            list: [
                "File-based storage: Data is stored in JSON files, sharded by ID for scalability.",
                "Schema support: Table schemas with type and regex validation.",
                "CRUD operations: Add, read, update, and delete rows.",
                "Migrations: Create, apply, and track schema migrations.",
                "Query builder: Chainable, expressive queries with filtering, sorting, and limits.",
                "Type-safe data model: Strongly typed data and schema definitions.",
            ],
        },
        {
            title: "Project Structure",
            list: [
                "`crud/`",
                "• `c.rs` — Create (add) operations for rows and batch inserts.",
                "• `r.rs` — Read operations: get all, get by ID, and filtered queries.",
                "• `u.rs` — Update operations, migration generation, and application.",
                "• `d.rs` — Delete operations: by ID and by condition.",
                "• `make.rs` — Core data types, schema, and utility functions.",
                "`lib.rs` — Query builder, high-level API, and integration tests.",
                "`test_migration_db/` — Example migration and data files (for development/testing).",
            ],
        },
        {
            title: "Data Model",
            subSections: [
                {
                    subtitle: "`Data` Enum",
                    content: (
                        <p>
                            Represents a value in a table row. Supported types: <br />
                            NULL, STRING, NUMBER, ARRAY, BOOLEAN, JSON <br />
                            Nullable variants: STRINGNULL, NUMBERNULL, etc.
                        </p>
                    ),
                },
                {
                    subtitle: "`Type` Enum",
                    content: <p>Defines the type of a field in a table schema.</p>,
                },
                {
                    subtitle: "`TABLE` Struct",
                    list: [
                        "name: Table name",
                        "id_column: Primary key field",
                        "field_names: Map of field name to (Type, regex pattern)",
                    ],
                },
                {
                    subtitle: "`DATABASE` Struct",
                    list: ["path: Root directory for all data and schema files"],
                },
            ],
        },
        {
            title: "Usage",
            codeBlocks: [
                {
                    description: "1. Initialize Database",
                    code: `let db = DATABASE::init("./dbfiles".to_string());`,
                },
                {
                    description: "2. Create a Table",
                    code: `let mut fields = HashMap::new();
fields.insert("id".to_string(), (Type::STRING, "".to_string()));
fields.insert("name".to_string(), (Type::STRING, "".to_string()));
fields.insert("age".to_string(), (Type::NUMBER, "".to_string()));
db.create_table(fields, "id".to_string(), "users".to_string())?;`,
                },
                {
                    description: "3. Insert Rows",
                    code: `let mut row = HashMap::new();
row.insert("id".to_string(), (Data::STRING("u1".to_string()), "".to_string()));
row.insert("name".to_string(), (Data::STRING("Alice".to_string()), "".to_string()));
row.insert("age".to_string(), (Data::NUMBER(30.0), "".to_string()));
db.insert("users", row);`,
                },
                {
                    description: "4. Query Data",
                    code: `let results = db.query("users".to_string())
    .where_("age", Operator::Gt, Data::NUMBER(26.0))
    .execute();`,
                },
                {
                    description: "5. Update Data",
                    code: `db.update_field_where(
    "users".to_string(),
    "id".to_string(),
    Data::STRING("u1".to_string()),
    "age".to_string(),
    (Data::NUMBER(31.0), "".to_string()),
    false,
    CMP::EQUAL,
);`,
                },
                {
                    description: "6. Delete Data",
                    code: `db.delete_row_by_id("users".to_string(), "u1".to_string());`,
                },
                {
                    description: "7. Migrations",
                    code: `db.apply_migrations()?;`,
                },
            ],
        },
        {
            title: "Sharding and Storage",
            list: [
                "Each table is a directory under the database path.",
                "Rows are sharded into files named by ID range (e.g., `000000000000000000000000-000000000000000000000999.txt`).",
                "Each file contains a JSON map of ID to row data.",
                "Table schemas are stored as `<table>-type.txt` in the root.",
                "Migrations are stored in `migrations/`.",
            ],
        },
        {
            title: "Query Builder Example",
            codeBlocks: [
                {
                    code: `let results = db.query("users".to_string())
    .where_("age", Operator::Gt, Data::NUMBER(20.0))
    .and("name", Operator::Eq, Data::STRING("Alice".to_string()))
    .sort_by("age", true)
    .limit(10)
    .execute();`,
                },
            ],
        },
        {
            title: "Testing",
            content: (
                <p>
                    See <code>lib.rs</code> and <code>make.rs</code> for unit tests covering
                    table creation, insertion, querying, and UUID generation.
                </p>
            ),
        },
        {
            title: "Extending",
            list: [
                "Add new data types by extending the `Data` and `Type` enums.",
                "Implement new migrations in `u.rs`.",
                "Add new query operators in the `Operator` enum and `compare` function.",
            ],
        },
        {
            title: "License",
            content: <p>MIT License. See main project for details.</p>,
        },
    ];

    return (
        <div className="min-h-screen bg-base-200 p-8 text-gray-900 font-sans max-w-5xl mx-auto">
            <motion.h1
                className="text-5xl font-extrabold mb-8 text-center text-primary"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                AbyssBase: A Simple File-Based Database in Rust
            </motion.h1>

            {sections.map((section, i) => (
                <motion.section
                    key={i}
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-3xl font-semibold mb-4 border-b border-primary pb-2">
                        {section.title}
                    </h2>

                    {section.subSections
                        ? section.subSections.map((sub, j) => (
                            <div key={j} className="mb-4 pl-4 border-l-4 border-primary">
                                <h3 className="text-xl font-semibold mb-2">{sub.subtitle}</h3>
                                {sub.content}
                                {sub.list && (
                                    <ul className="list-disc list-inside mt-1 space-y-1 text-gray-800">
                                        {sub.list.map((item, k) => (
                                            <li key={k}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))
                        : null}

                    {section.content && !section.subSections && (
                        <div className="text-lg leading-relaxed">{section.content}</div>
                    )}

                    {section.list && !section.subSections && (
                        <ul className="list-disc list-inside space-y-2 text-gray-800">
                            {section.list.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}

                    {section.codeBlocks && (
                        <div className="space-y-6 mt-6">
                            {section.codeBlocks.map((block, idx) => (
                                <div key={idx}>
                                    {block.description && (
                                        <p className="font-semibold mb-1">{block.description}</p>
                                    )}
                                    <pre className="bg-gray-900 text-green-400 rounded-md p-4 overflow-x-auto text-sm">
                    <code>{block.code}</code>
                  </pre>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.section>
            ))}
        </div>
    );
};

export default AbyssBasePage;
