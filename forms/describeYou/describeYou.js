
btnFavExercises.onclick=function(){
  ChangeForm(favExercises)
}

rdbtnPersonality.onchange=function(){
  let userChoice = $("input[name=rdbtnPersonality]:checked").prop("value")
  console.log(`I would agree that you are a ${userChoice} person too!`)
}
