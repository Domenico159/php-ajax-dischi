<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dischi PHP</title>
    <!-- Style -->
    <link rel="stylesheet" href="./style/main.css">
</head>

<body>
    <!-- Header -->
    <header>
        <nav class="container">
            <img src="../assets/logo.png" alt="">
        </nav>
    </header>

    <!-- Main -->

    <main>

        <?php require_once __DIR__ . '/../data/database.php';   ?>


        <div class="container main-content">

            <?php foreach ($database as $album) { ?>

                <div class="card">
                    <img src="<?php echo $album['poster'] ?>" alt="">
                    <h5><?php echo $album['title'] ?></h5>
                    <h6><?php echo $album['author'] ?></h6>
                    <h5><?php echo $album['year'] ?></h5>
                    <h6><?php echo $album['genre'] ?></h6>
                </div>

            <?php } ?>

        </div>

    </main>
</body>

</html>