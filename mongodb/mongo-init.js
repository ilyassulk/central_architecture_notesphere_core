db.createUser({
    user: "monitor",
    pwd: "monitorPassword",
    roles: [
        { role: "clusterMonitor", db: "admin" },
        { role: "read", db: "local" }
    ]
});
