<?php
/**
 * Script opcional en PHP para procesar el formulario en hosting tradicional (cPanel, Apache, etc.)
 * Solo necesitas colocar este archivo en la raíz de tu servidor junto a los archivos de la web.
 */

// Permite peticiones desde tu propio dominio
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
    exit;
}

// Obtener datos JSON enviados por React
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// CAMBIA ESTE CORREO POR EL TUYO:
$destinatario = "eantunez@dentnova.es";

$nombre = filter_var($data['name'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS);
$clinica = filter_var($data['clinic'] ?? 'No indicada', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$telefono = filter_var($data['phone'] ?? 'No indicado', FILTER_SANITIZE_SPECIAL_CHARS);
$mensaje = filter_var($data['message'] ?? 'Sin mensaje', FILTER_SANITIZE_SPECIAL_CHARS);

if (!$nombre || !$email) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Faltan campos obligatorios"]);
    exit;
}

$asunto = "Nueva consulta web DentNova: " . ($clinica ?: $nombre);

$cuerpo = "Has recibido una nueva consulta desde la web de DentNova:\n\n";
$cuerpo .= "Nombre: " . $nombre . "\n";
$cuerpo .= "Clínica: " . $clinica . "\n";
$cuerpo .= "Email: " . $email . "\n";
$cuerpo .= "Teléfono: " . $telefono . "\n\n";
$cuerpo .= "Mensaje:\n" . $mensaje . "\n\n";
$cuerpo .= "Fecha: " . date("d/m/Y H:i:s") . "\n";

$cabeceras = "From: web@dentnova.com\r\n";
$cabeceras .= "Reply-To: " . $email . "\r\n";
$cabeceras .= "X-Mailer: PHP/" . phpversion();

if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
    echo json_encode(["status" => "success", "message" => "Mensaje enviado"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Error al enviar el correo"]);
}
