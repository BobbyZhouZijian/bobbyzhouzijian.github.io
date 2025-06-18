---
layout: archive
# title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
:root {
  /* Light mode colors */
  --text-primary: #2c3e50;
  --text-secondary: #495057;
  --bg-primary: #fff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #f8f9fa;
  --border-color: #dee2e6;
  --border-hover-color: #adb5bd;
  --button-bg: #f8f9fa;
  --button-text: #495057;
  --table-border: #ecf0f1;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode colors */
    --text-primary: #e2e8f0;
    --text-secondary: #cbd5e0;
    --bg-primary: #1a202c;
    --bg-secondary: #2d3748;
    --bg-tertiary: #2d3748;
    --border-color: #4a5568;
    --border-hover-color: #718096;
    --button-bg: #2d3748;
    --button-text: #e2e8f0;
    --table-border: #4a5568;
  }
}

.cv-button {
  display: inline-block;
  padding: 6px 12px;
  background: var(--button-bg);
  color: var(--button-text);
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
  font-size: 0.9em;
}

.cv-button:hover {
  background: var(--bg-secondary);
  border-color: var(--border-hover-color);
  color: var(--button-text);
  text-decoration: none;
}

.cv-preview-container {
  margin: 2em 0;
  text-align: center;
  background: var(--bg-tertiary);
  padding: 1em;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.cv-table {
  width: 100%;
  color: var(--text-primary);
  border-collapse: collapse;
  margin: 1em 0;
  background: var(--bg-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.cv-table thead tr {
  border-bottom: 2px solid var(--table-border);
}

.cv-table th {
  padding: 0.8em;
  text-align: left;
  font-size: 1.2em;
  color: var(--text-primary);
}

.cv-table td {
  padding: 0.8em;
  font-size: 1em;
  border-bottom: 1px solid var(--table-border);
}
</style>

<div style="text-align: center; margin: 2em 0; padding: 1em;">
  <h2 style="margin-bottom: 1em; font-size: 1.8em; color: var(--text-primary);">📄 Curriculum Vitae</h2>
  <div style="display: flex; justify-content: center; gap: 0.5em; flex-wrap: wrap; margin-bottom: 1em;">
    <a href="{{ base_path }}/files/cv.pdf" class="cv-button">
      <i class="fas fa-download"></i> Download PDF
    </a>
    <a href="#" onclick="togglePreview(); return false;" class="cv-button">
      <i class="fas fa-eye"></i> Show Preview
    </a>
  </div>
</div>

<div id="cv-preview" class="cv-preview-container" style="display: none;">
  <iframe src="{{ base_path }}/files/cv.pdf" 
          style="width: 100%; height: 800px; border: 1px solid var(--border-color); border-radius: 3px;"
          title="CV Preview">
    <p>Your browser does not support PDFs. <a href="{{ base_path }}/files/cv.pdf">Download the PDF</a> instead.</p>
  </iframe>
</div>

<script>
function togglePreview() {
  var preview = document.getElementById('cv-preview');
  var toggleBtn = document.querySelector('a[onclick="togglePreview(); return false;"]');
  
  if (preview.style.display === 'none') {
    preview.style.display = 'block';
    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Preview';
  } else {
    preview.style.display = 'none';
    toggleBtn.innerHTML = '<i class="fas fa-eye"></i> Show Preview';
  }
}
</script>

## Education

<table class="cv-table">
  <thead>
    <tr>
      <th>Degree</th>
      <th>Institution</th>
      <th>Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Ph.D. in Computer Science</strong></td>
      <td>National University of Singapore</td>
      <td>2023 – present</td>
    </tr>
    <tr>
      <td><strong>B.Comp. (1st Class Hons) in Computer Science</strong></td>
      <td>National University of Singapore</td>
      <td>2019 – 2023</td>
    </tr>
  </tbody>
</table>

---

## Work Experience

<table class="cv-table">
  <thead>
    <tr>
      <th>Position</th>
      <th>Institution</th>
      <th>Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Research Engineer</strong></td>
      <td>Singapore-MIT Alliance for Research and Technology Centre (SMART)</td>
      <td>Aug 2023 – present</td>
    </tr>
    <tr>
      <td><strong>ML Engineer Intern</strong></td>
      <td>TikTok</td>
      <td>Mar 2021 – Mar 2022</td>
    </tr>
  </tbody>
</table>

---

## Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Honors and Awards

- **Research Achievement Award**, National University of Singapore, 2024
- **Google Travel Grant**, AAAI 2023 (for "Probably Approximate Shapley Fairness")
- **Dean's List**, National University of Singapore, 2019-2022
- **Outstanding Computing Project Prize**, NUS, 2022
- **NUS Science and Technology Scholarship**, NUS, 2019-2023

---

## Professional Service

**Conference Reviewing**
- NeurIPS (2025)


<!-- 
## Talks and Presentations

<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}</ul>

--- -->
<!-- 
## Teaching Experience

<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul> -->
