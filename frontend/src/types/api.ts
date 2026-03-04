export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'student' | 'teacher' | 'parent' | 'admin'
  createdAt: string
  updatedAt: string
}

export interface StudentProfile {
  id: string
  userId: string
  neurodivergentTypes: string[]
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading-writing'
  preferredInputMethod: 'text' | 'voice'
  preferredOutputMethod: 'text' | 'voice' | 'both'
  fontSizePreference: number
  contrastMode: boolean
  readingAssistanceEnabled: boolean
  textSpacingPreference: number
  createdAt: string
  updatedAt: string
}

export interface LessonExplanation {
  id: string
  topic: string
  originalContent: string
  simplifiedContent: string
  studentId: string
  createdAt: string
}

export interface TaskBreakdown {
  id: string
  originalTask: string
  steps: TaskStep[]
  studentId: string
  createdAt: string
}

export interface TaskStep {
  id: string
  stepNumber: number
  instruction: string
  tips: string[]
  estimatedTime?: number
}

export interface InteractionHistory {
  id: string
  studentId: string
  type: 'lesson_simplification' | 'task_breakdown' | 'voice_interaction' | 'preference_update'
  content: string
  timestamp: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
