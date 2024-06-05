const ExerciseType = {
  Cardio: "cardio",
  Strength: "strength",
};

// Define cardio exercise types as const objects
const CardioExercise = {
  Running: "running",
  Cycling: "cycling",
  Swimming: "swimming",
  Walking: "walking",
  Hiking: "hiking",
  Skating: "skating",
  Skiing: "skiing",
  Rowing: "rowing",
  Elliptical: "elliptical",
  Stairmaster: "stairmaster",
};

// Define strength exercise types as const objects
const StrengthExercise = {
  Squats: "Squats",
  BenchPress: "Bench Press",
  PullUps: "Pull Ups",
  PushUps: "Push Ups",
  SitUps: "Sit Ups",
  Lunges: "Lunges",
  JumpingJacks: "Jumping Jacks",
  Crunches: "Crunches",
  LegRaises: "Leg Raises",
  BicepCurls: "Bicep Curls",
  TricepDips: "Tricep Dips",
  ShoulderPress: "Shoulder Press",
  Deadlifts: "Deadlifts",
};

/**
* @returns {ExerciseType} - Chosen exercise type
*/
function chooseExerciseType() {
  return ExerciseType.Cardio;
}
