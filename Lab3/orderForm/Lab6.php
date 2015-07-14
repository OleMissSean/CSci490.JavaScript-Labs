
<?php #process form
echo "Processing form data... ";
if ( isset($_POST['name']) ) 
{
    
        $name = $_POST['name'];
        $outputLine = "Server Response:\n Form data received as \n" .
                                "Name: $name \n ";
        echo nl2br($outputLine);
} else {
	echo 'INVALID';
}
?>
