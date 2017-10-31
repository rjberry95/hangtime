class Workout {
  name: '';
  parts: Parts[];
}

class Parts {
  name: '';
  exercises: Exercise[];
  partRest: 0;
  restUnit: '';
}

class Exercise {
  name: '';
  sets: 0;
  reps: 0;
  hasDuration: boolean;
  duration: 0;
  durationUnit: '';
  exerciseRest: 0;
  restUnit: '';
}