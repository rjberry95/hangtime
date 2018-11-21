export const WorkoutShema = {
  name: 'Workout',
  properties: {
    name: 'string',
    parts: 'Part[]'
  }
}

export const Part = {
  name: 'Part',
  properties: {
    name: 'string',
    exercises: 'Exercise[]',
    partRest: 'int',
    restUnit: 'string'
  }
}

export const Exercise = {
  name: 'Exercise',
  properties: {
    name: 'string',
    sets: 'int',
    reps: 'int',
    hasDuration: 'boolean',
    minutes: 'int?',
    hours: 'int?',
    seconds: 'int?',
    restMinutes: 'int?',
    restSeconds: 'int?',
  }
}