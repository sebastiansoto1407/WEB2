<?php
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
    http_response_code(200);
    exit();
}

$serverName='CC308-21';
$database='Doguito';
$userName='-';
$password='contraseña';

try{
    $conn= new PDO("sqlsrv:Server=$serverName; Database=$database", $userName,
    $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    http_response_code(500);
    echo json_encode(['error'=>'error de conexion']);
    exit();
}
$method=$_SERVER['REQUEST_METHOD'];

try{
    switch($method){
        case 'GET':
            $id=$_GET['id']?? null:
            if($id){
                $stmt=$conn->prepare("SELECT * FROM clientes WHERE id=?");
                $stmt->execute(['$id']);
                $cliente=$stmt->fetch(PDO::FETCH_ASSOC);


            } else {
                $stmt=$conn->query('SELECT * FROM clientes');
                $clientes=$stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            break;
        case 'POST':
            $input=json_decode(file_get_contents('php://input'),true);
            $id=$input['id']?? uniqid();
            $nombre=$input['nombre'];
            $email=$input['email'];
            $stmt=$conn->prepare('INSERT INTO clientes (id,nombre,email) VALUES
            (?,?,?)');
            $stmt->execute([$id,$nombre,$email]);
        break;
        case 'PUT':
            $input=json_decode(file_get_contents('php://input'),true);
            $id=$input['id'];
            $nombre=$input['nombre'];
            $email=$input['email'];
            $stmt=$conn->prepare('INSERT INTO clientes (id,nombre,email) VALUES
            (?,?,?');
            $stmt->execute([$id,$nombre,$email]);


    }
}

?>