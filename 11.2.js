
let rand = Math.floor(Math.random() * 15)+1
function f1 (){

    let user = Number($('#in1').val())

    if(rand<user){
        $('#out2').text('много')
    }
    else if(rand>user){
        $('#out2').text('мало')
    }
    else{
        $('#out2').text('ты выиграл')
    }

}
$('#but').click(f1)

let score = 1
function f2(){
    score+=1
    if(score<=3){
        $('#but').show
    }
    else{
        $('#but').hide
        alert('попытки закончились')
    }
}
$('#but').click(f2)
