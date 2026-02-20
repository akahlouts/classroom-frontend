import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introductory course covering fundamental programming concepts, data structures, and algorithms. Students will learn problem-solving techniques and basic software development practices.",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Advanced calculus topics including integration techniques, sequences, series, and differential equations. Builds upon concepts from Calculus I with emphasis on applications in science and engineering.",
    createdAt: "2024-01-20T10:00:00Z",
  },
  {
    id: 3,
    code: "PHYS301",
    name: "Quantum Mechanics",
    department: "Physics",
    description:
      "An exploration of quantum theory covering wave-particle duality, Schrödinger equation, quantum states, and measurement theory. Prerequisites include advanced mathematics and classical mechanics.",
    createdAt: "2024-02-01T10:00:00Z",
  },
];
