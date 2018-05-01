<?php
$name = $_POST[ 'name' ];
class Person {
    public $name;
    public $age;
    public $gender;
    public $count;
    public $email;
    public $details;

    function __construct( $name, $age, $gender, $count, $email, $details ){
        $this->name = $name;
        $this->age = $age;
        $this->gender = $gender;
        $this->count = $count;
        $this->email = $email;
        $this->details = $details;
    }
}

$guo = new Person( $name, 22, 'boy', '10000', 'guo@jing.com', '我很有魅力' );
$list = array( $guo );
echo json_encode( $list );
?>