function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "menu/" + s : s.substring(0, index) + "/menu/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0005,
    key: "TableView",
    style: {
        minRowHeight: 52,
        backgroundColor: "gray",
        separatorColor: "#4f4f4f",
        right: 5,
        width: 220,
        zIndex: 2001
    }
}, {
    isApi: true,
    priority: 1000.0006,
    key: "View",
    style: {
        height: 0,
        zIndex: 2001
    }
}, {
    isApi: true,
    priority: 1101.0007,
    key: "View",
    style: {
        top: 0
    }
} ];