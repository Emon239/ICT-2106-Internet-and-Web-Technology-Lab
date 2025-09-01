 
        let students = [
            { id: "101", name: "Alice", section: "A", year: "2023" },
            { id: "102", name: "Bob", section: "B", year: "2024" },
            { id: "103", name: "Charlie", section: "A", year: "2025" }
        ];

        
        displayStudents();

        function displayStudents() {
            const tbody = document.getElementById("studentList");
            tbody.innerHTML = "";
            
            students.forEach(student => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.section}</td>
                    <td>${student.year}</td>
                `;
                tbody.appendChild(row);
            });
        }

        function removeFirstStudent() {
            if (students.length > 0) {
                students.shift(); // Remove first student
                displayStudents();
            } else {
                alert("No students to remove!");
            }
        }

        function addNewStudent() {
            const newId = String(100 + students.length + 1);
            const newStudent = {
                id: newId,
                name: `Student${newId}`,
                section: ["A", "B", "C"][Math.floor(Math.random() * 3)],
                year: ["2023", "2024", "2025"][Math.floor(Math.random() * 3)]
            };
            
            students.push(newStudent); 
            displayStudents();
        }
