const teamContainer = document.getElementById("teamContainer");

const jsonFiles = [
    "../members/HYJ.json",
    "../members/JEG.json",
    "../members/KMS.json",
    "../members/LCS.json",
    "../members/PCB.json",
    "../members/RYS.json",
];

async function loadMembers() {
    try {
        const requests = jsonFiles.map(file => fetch(file));
        const responses = await Promise.all(requests);

        const members = await Promise.all(
            responses.map(response => response.json())
        );

        members.forEach(member => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <div class="profile-img">
                    <img src="../image/github.svg" alt="${member.name} 프로필 이미지">
                </div>
                <div class="name">${member.name}</div>
                <div class="role">${member.info.resolution}</div>
                <div class="desc">${member.introduction.quote}</div>
                <div class="skills">
                    ${member.strengths.map(strength => `<span class="skill-tag">${strength}</span>`).join("")}
                </div>
            `;

            teamContainer.appendChild(card);
        });
    } catch (error) {
        console.error("JSON 불러오기 실패:", error);
    }
}

loadMembers();