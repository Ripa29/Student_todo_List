import { defineStore } from 'pinia';
export const useStudentStore = defineStore('studentStore', {
    state: () => ({
        students: [],
    }),
    actions: {
        addStudent(newStudent) {
            this.students.push({
                ...newStudent,
                id: Date.now(), // Assign a unique ID for new students
            });
        },
        removeStudent(id) {
            this.students = this.students.filter(student => student.id !== id);
        },
        editStudentDetails(student) {
            const index = this.students.findIndex(s => s.id === student.id);
            if (index !== -1) {
              this.students[index] = { ...student }; // Update the student details
            }
        },
    },
});

