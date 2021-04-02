
btnFavExercises.onclick=function(){
  ChangeForm(favExercises)
}

rdbtnPersonality.onchange=function(){
  let userChoice = $("input[name=rdbtnPersonality]:checked").prop("value")
  lblMessage2.value = `I would agree that you are a ${userChoice} person too!`
}
