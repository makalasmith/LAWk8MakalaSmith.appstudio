var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    for (i = 0; i < exercises.length; i++) 
        selExercises.addItem(exercises[i])
}

btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}

btnDone.onclick=function(){
  let message = ""
  for (i = 0; i < selExercises.text.length; i++)
     message = message + selExercises.text[i] + ", "
     
  if(message == "situps, plank, ")
    lblMessage3.value = "You chose situps and planks - those are the two core exercises."
  else
    lblMessage3.value = `You did not pick the two core exercises.`
}
