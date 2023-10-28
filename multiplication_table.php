<?php

echo "<a href=practice4.html>Go back</a><br>";
echo "<a href=index.html>Return to home page</a>";

echo "<table border =\"1\">";

for ($row=0; $row<=$_POST['size']; $row++)
{
	echo "<tr> \n";
	for ($col=0; $col<=$_POST['size']; $col++)
	{
		if ($row==0 && $col==0)
		{
			echo "<td>  </td>";
		}
		else if ($row==0 && $col!=0)
		{
			echo "<td>$col</td>";
		}
		else if ($row!=0 && $col==0)
		{
			echo "<td>$row</td>";
		}
		else
		{
			$product = $col*$row;
			echo "<td>$product</td> \n";
		}
	}
	echo "</tr>";
}
?>
