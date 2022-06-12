<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Object</title>
</head>
<script>
    var user = {
        name: "John",
        FirstName: "Mike"
    };
    user.name = "peter"
    window.alert(user.name)
    delete user.name
    window.alert(user.name)
    var fruit = {
        apple: 20,
        pear: 20,
        peach: 10
    };
    window.alert(fruit.apple + fruit.pear + fruit.peach)
</script>
</html>
