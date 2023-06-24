var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["user_info"] = 1] = "user_info";
    role[role["manager"] = 2] = "manager";
})(role || (role = {}));
;
console.log(role.manager);
