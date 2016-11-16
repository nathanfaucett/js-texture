var tape = require("tape"),
    Texture = require("..");


tape("texture", function(assert) {
    var texture = Texture.create({
        name: "texture",
        src: null
    });

    texture.setWidth(512);
    texture.setHeight(512);

    assert.equals(texture.width, 512);
    assert.equals(texture.height, 512);

    assert.end();
});