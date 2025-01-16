<template>
  <div class="p-6 max-w-4xl mx-auto">
    <!-- Add student Form -->
    <div class="mb-8">
      <h2 class="text-2xl text-center font-bold mb-4">Student Information</h2>

      <form @submit.prevent="addStudent" class="bg-white p-6 rounded-lg shadow-lg">
        
        <!-- Name Inputs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          <input class="w-full p-3 border border-gray-300 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          type="text" placeholder="Enter Your First Name"
          v-model="newStudent.firstName" />

          <input class="w-full p-3 border border-gray-300 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          type="text" placeholder="Enter Your Last Name"
          v-model="newStudent.lastName" />

        </div>

        <!-- Parent Inputs -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input v-model="newStudent.fatherName" type="text"
          placeholder="Enter Your Father's Name" class="w-full p-3 border 
          border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 
  focus:outline-none"/>

        <input v-model="newStudent.motherName" type="text"
          placeholder="Enter Your Mother's Name" class="w-full p-3 border 
          border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 
  focus:outline-none"/>
      </div>

        <!-- Address & Email Inputs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input v-model="newStudent.address" type="text" placeholder="Enter Your Address"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 
  focus:outline-none" />

          <input v-model="newStudent.email" type="email" placeholder="Enter Your Email"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 
  focus:outline-none" />
        </div>

        <!-- Gender & Phone -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <select v-model="newStudent.gender" class="w-full p-3 border border-gray-300 
        rounded-lg focus:ring-2 focus:ring-blue-500 
  focus:outline-none">
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

  <!-- Country Code Selector -->
  <div class="flex items-center">
    <select v-model="newStudent.countryCode" class="w-full md:w-1/3 p-3 border border-gray-300 
    rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
      <option value="">Code</option>
      <option value="+1">+1 (USA/Canada)</option>
      <option value="+44">+44 (UK)</option>
      <option value="+91">+91 (India)</option>
      <option value="+88">+880 (Bangladesh)</option>
      <option value="+30">+30 (Greece)</option>
      <option value="+503">+503 (Honduras)</option>
      <option value="+502">+502 (Guatemala)</option>
      <option value="+53">+53 (Haiti)</option>
      <option value="+92">+92 (Afghanistan)</option>
      <option value="+61">+61 (Australia)</option>
      <option value="+81">+81 (Japan)</option>
      <option value="+49">+49 (Germany)</option>
      <option value="+86">+86 (China)</option>
      <option value="+7">+7 (Russia)</option>
      <option value="+55">+55 (Brazil)</option>
      <option value="+380">+380 (Ukraine)</option>
      <option value="+27">+27 (South Africa)</option>
      <option value="+370">+370 (Lithuania)</option>
      <option value="+358">+358 (Finland)</option>
      <option value="+33">+33 (France)</option>
      <option value="+39">+39 (Italy)</option>
      <option value="+82">+82 (South Korea)</option>
      <option value="+52">+52 (Mexico)</option>
      <option value="+966">+966 (Jordan)</option>
      <option value="+65">+65 (Singapore)</option>
      <option value="+34">+34 (Spain)</option>
      <option value="+46">+46 (Sweden)</option>
      <option value="+90">+90 (Turkey)</option>
      <option value="+971">+971 (UAE)</option>
      <option value="+20">+20 (Egypt)</option>
      <option value="+41">+41 (Switzerland)</option>
      <option value="+31">+31 (Netherlands)</option>
      <option value="+92">+92 (Pakistan)</option>
      <option value="+63">+63 (Philippines)</option>
      <option value="+56">+56 (Chile)</option>
      <option value="+886">+886 (Taiwan)</option>
      <option value="+504">+504 (Honduras)</option>
      <option value="+507">+507 (Panama)</option>
      <option value="+505">+505 (Guatemala)</option>
      <option value="+506">+506 (Costa Rica)</option>
      <option value="+52">+52 (Mexico)</option>
      <option value="+54">+54 (Argentina)</option>
      <option value="+57">+57 (Colombia)</option>
      <option value="+58">+58 (Venezuela)</option>
      <option value="+593">+593 (Ecuador)</option>
      <option value="+591">+591 (Bolivia)</option>
      <option value="+595">+595 (Paraguay)</option>
      <option value="+598">+598 (Uruguay)</option>
      <option value="+51">+51 (Peru)</option>
      <option value="+52">+52 (Mexico)</option>

    </select>
    <input v-model="newStudent.phone" type="text" placeholder="Enter Your Phone Number"
      class="w-full md:w-2/3 p-3  border border-gray-300 rounded-lg focus:ring-2 
      focus:ring-blue-500
      focus:outline-none" />
  </div>
</div>


        <!-- Birth & Grade -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input v-model="newStudent.birthday" type="date" placeholder="Enter Your Date of Birth"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 
  focus:outline-none" />
        <select v-model="newStudent.grade" class="w-full p-3 border border-gray-300 
        rounded-lg focus:ring-2 focus:ring-blue-500 
  focus:outline-none">
          <option value="">Grade</option>
          <option>A+</option>
          <option>A</option>
          <option>A-</option>
          <option>B+</option>
          <option>B</option>
          <option>B-</option>
          <option>C+</option>
          <option>C</option>
          <option>C-</option>
          <option>D</option>
          <option>F</option>
        </select>
      </div>

        <!-- Subject Select -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <select v-model="newStudent.subject" class="w-full p-3 border border-gray-300 rounded-lg 
        focus:ring-2 focus:ring-blue-500 focus:outline-none">
        <option value="">Subject</option>
        <option>Science</option>
        <option>Commerce</option>
        <option>Arts</option>
      </select>
        </div>
        
        <!-- Submit Button -->
        <button type="submit" class="bg-blue-500 
        text-white py-3 px-4 rounded-lg hover:bg-blue-600 
        transition-all duration-200 ease-in-out mb-5">Add Student</button>
      </form>

    <!-- Students List -->
    <div>
      <h2 class="text-2xl font-bold p-4 mb-4">Students</h2>
      <ul>
        <li
          v-for="newStudent in students"
          :key="newStudent.id"
          class="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4 shadow"
        >
          <div>
            <p><strong>Name:</strong> {{ newStudent.firstName }} {{ newStudent.lastName }}</p>
            <p><strong>Father Name:</strong> {{ newStudent.fatherName }}</p>
            <p><strong>Mother Name:</strong> {{ newStudent.motherName }}</p>
            <p><strong>Address:</strong> {{ newStudent.address }}</p>
            <p><strong>Email:</strong> {{ newStudent.email }}</p>
            <p><strong>Phone:</strong> {{ newStudent.phone }}</p>
            <p><strong>Birthday:</strong> {{ newStudent.birthday }}</p>
            <p><strong>Gender:</strong> {{ newStudent.gender }}</p>
            <p><strong>Grade:</strong> {{ newStudent.grade }}</p>
            <p><strong>Subject:</strong> {{ newStudent.subject }}</p>
          </div>
          <div class="space-x-2">

            <button
  @click="removeStudent(newStudent.id)"
  class="text-red-500 hover:underline">
  Delete
</button>

<button
  @click="editStudentDetails(student)"
  class="text-blue-500 hover:underline">
  Edit
</button>

</div>
        </li>
      </ul>
    </div>

  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue' //composition API
import { useStudentStore } from './store/studentStore' // Import the store

// Access the Pinia store
const studentStore = useStudentStore()

// Local state
const newStudent = ref({
  id: null, // Include id for editing
  firstName: '',
  lastName: '',
  fatherName: '',
  motherName: '',
  address: '',
  email: '',
  gender: '',
  countryCode: '',
  phone: '',
  birthday: '',
  grade: '',
  subject: ''
})

// Methods

const addStudent = () => {
  if (newStudent.value.phone && newStudent.value.countryCode) {
    newStudent.value.phone = `${newStudent.value.countryCode} ${newStudent.value.phone}`
  }
  if (newStudent.value.id) {
    studentStore.editStudentDetails(newStudent.value);
  } else {
    studentStore.addStudent(newStudent.value);
  }
  resetForm()
}


const removeStudent = (id) => {
  studentStore.removeStudent(id)
}


const editStudentDetails = (student) => {
  newStudent.value = { ...student } // Load the student's data for editing
}

const resetForm = () => {
  Object.keys(newStudent.value).forEach(key => {
    newStudent.value[key] = '';
  });
  newStudent.value.id = null; // Clear the ID to avoid unintended updates
};



// Students from the store
const students = computed(() => studentStore.students)

</script>





