// SHOW PAGE FUNCTION
function showPage(pageId) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

// CASE LIST DATA (20 REALISTIC SAMPLE CASES)
const cases = [
    { title: "State vs Ramesh Kumar (2021)", status: "Next Hearing: 12 Jan 2025" },
    { title: "Meera vs Delhi Transport (2020)", status: "Case Closed: Compensation Approved" },
    { title: "Amit Housing Fraud Case (2019)", status: "Under Investigation" },
    { title: "PIL: Clean Ganga Mission", status: "In Supreme Court" },
    { title: "Farmers Protest Case", status: "Next Hearing: 5 Feb 2025" },
    { title: "Cyber Crime: Online Scam", status: "Accused Arrested" },
    { title: "Land Dispute: Sharma Family", status: "Pending Evidence" },
    { title: "Traffic Violation Appeal", status: "Fine Reduced" },
    { title: "Electricity Bill Dispute", status: "Judgement Reserved" },
    { title: "False Identity Case", status: "Documents Under Review" },
    { title: "Property Tax Evasion", status: "Penalty Imposed" },
    { title: "Bank Loan Fraud", status: "FIR Filed" },
    { title: "Public Nuisance Case", status: "Warning Issued" },
    { title: "Illegal Construction Case", status: "Demolition Ordered" },
    { title: "Consumer Complaint: Mobile Company", status: "Refund Approved" },
    { title: "Student Harassment Case", status: "Investigation Ongoing" },
    { title: "Hospital Negligence PIL", status: "Hearing Started" },
    { title: "Water Supply Issue", status: "Local Body Notified" },
    { title: "Noise Complaint", status: "Settlement Reached" },
    { title: "RTI Case: Missing Records", status: "Documents Found" }
];

// LOAD CASES INTO HTML
function loadCases() {
    let container = document.getElementById("caseContainer");
    container.innerHTML = "";

    cases.forEach((c, index) => {
        let div = document.createElement("div");
        div.className = "caseBox";
        div.innerText = c.title;
        div.onclick = () => showCase(index);
        container.appendChild(div);
    });
}

// SHOW CASE STATUS
function showCase(index) {
    document.getElementById("caseTitle").innerText = cases[index].title;
    document.getElementById("caseStatus").innerText = cases[index].status;
}

// SEARCH FUNCTION
function searchCases() {
    let text = document.getElementById("searchBar").value.toLowerCase();
    let boxes = document.querySelectorAll(".caseBox");

    boxes.forEach(box => {
        box.style.display = box.innerText.toLowerCase().includes(text)
            ? "block"
            : "none";
    });
}

loadCases();