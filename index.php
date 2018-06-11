<?php
    session_start();

    if(isset($_GET['stato']) && $_GET['stato'] == "fine")
    {
        ?>

            <html>
                <h1>
                    Parcheggio salvato
                </h1>
            </html>
        <?php 
    }

    if(isset($_SESSION['log']))
    {
        header("location:nuovo.html");
    }
    else
    {

        if(isset($_POST['bottone']))
        {
            if(isset($_POST['user']) && isset($_POST['pw']))
            {
                $user = $_POST['user'];
                $pw = $_POST['pw'];

                if($user == "admin" && $pw == "admin")
                {
                    $_SESSION["log"] = "login";
                    header("location:nuovo.html");
                }
            }
        }
        else
        {
        ?>
            <html>
                <form action="#" method="post">
                    <input type="text" name="user" placeholder="user name"> <br>
                    <input type="password" name="pw" placeholder="password"> <br>
                    <button type="submit" name="bottone"> ACCEDI </button>
                </form>
            </html>
        <?php
        }
    }
?>