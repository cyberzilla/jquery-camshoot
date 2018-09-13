<?php 
$img = $_POST['data'];
$ext = $_POST['ext'];
$name = $_POST['name'];
$dir = $_POST['dir'];
$img = preg_replace('#^data:image/\w+;base64,#i', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);

if($img!=='undefined'){
	$saved_file = file_put_contents($dir.$name.'.'.$ext, $data);
	if (($saved_file === false) || ($saved_file == -1)) {
		echo "Tidak dapat menyimpan foto";
	}else{
		echo "Sukses menyimpan foto";
	}
}else{
	echo "Tekan tombol ambil gambar terlebih dahulu!";

}	

?>