Add-Type -AssemblyName System.Drawing

$srcPath = "c:\coding projects\codebreaker\src\lib\images\logo.png"
$destPath = "c:\coding projects\codebreaker\static\icons\icon-1024x1024.png"

$srcImage = [System.Drawing.Image]::FromFile($srcPath)
Write-Output "Source Dimensions: $($srcImage.Width) x $($srcImage.Height)"

$destImage = New-Object System.Drawing.Bitmap 1024, 1024
$graphics = [System.Drawing.Graphics]::FromImage($destImage)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.Clear([System.Drawing.Color]::Transparent)

# Fit or center preserving aspect ratio
$w = $srcImage.Width
$h = $srcImage.Height

if ($w -eq $h) {
    $graphics.DrawImage($srcImage, 0, 0, 1024, 1024)
} else {
    $ratio = [Math]::Min(1024.0 / $w, 1024.0 / $h)
    $newW = [int]($w * $ratio)
    $newH = [int]($h * $ratio)
    $posX = [int]((1024 - $newW) / 2)
    $posY = [int]((1024 - $newH) / 2)
    $graphics.DrawImage($srcImage, $posX, $posY, $newW, $newH)
}

$graphics.Dispose()
$srcImage.Dispose()

$destImage.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$destImage.Dispose()

Write-Output "Successfully saved 1024x1024 icon to: $destPath"
