<?php
$uploadDir = 'uploads/';
$files = [];

if (is_dir($uploadDir)) {
    if ($handle = opendir($uploadDir)) {
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $files[] = $entry;
            }
        }
        closedir($handle);
    }
}

echo json_encode($files);
?>
