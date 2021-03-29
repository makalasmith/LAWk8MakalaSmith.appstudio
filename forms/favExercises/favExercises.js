var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    for (i = 0; i < exercises.length; i++) 
        selExercises.addItem(exercises[i])
}





btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}
