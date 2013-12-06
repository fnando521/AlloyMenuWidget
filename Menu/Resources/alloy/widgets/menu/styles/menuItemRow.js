function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "menu/" + s : s.substring(0, index) + "/menu/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        color: "white",
        left: 50
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "ImageView",
    style: {
        width: 30,
        left: 10
    }
} ];