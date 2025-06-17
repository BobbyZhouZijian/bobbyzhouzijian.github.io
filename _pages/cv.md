---
layout: archive
# title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}


<div style="text-align: center; margin: 2em 0; padding: 1em;">
  <h2 style="margin-bottom: 1em; font-size: 1.8em; color: #2c3e50;">📄 Curriculum Vitae</h2>
  <div style="display: flex; justify-content: center; gap: 0.5em; flex-wrap: wrap; margin-bottom: 1em;">
    <a href="{{ base_path }}/files/cv.pdf" 
       style="display: inline-block; padding: 6px 12px; background: #f8f9fa; color: #495057; text-decoration: none; border-radius: 4px; border: 1px solid #dee2e6; transition: all 0.2s ease; font-size: 0.9em;"
       onmouseover="this.style.background='#e9ecef'; this.style.borderColor='#adb5bd'"
       onmouseout="this.style.background='#f8f9fa'; this.style.borderColor='#dee2e6'">
      <i class="fas fa-download"></i> Download PDF
    </a>
    <a href="#" onclick="togglePreview(); return false;"
       style="display: inline-block; padding: 6px 12px; background: #f8f9fa; color: #495057; text-decoration: none; border-radius: 4px; border: 1px solid #dee2e6; transition: all 0.2s ease; font-size: 0.9em;"
       onmouseover="this.style.background='#e9ecef'; this.style.borderColor='#adb5bd'"
       onmouseout="this.style.background='#f8f9fa'; this.style.borderColor='#dee2e6'">
      <i class="fas fa-eye"></i> Show Preview
    </a>
  </div>
</div>

<div id="cv-preview" style="display: none; margin: 2em 0; text-align: center; background: #f8f9fa; padding: 1em; border-radius: 5px; border: 1px solid #dee2e6;">
  <iframe src="{{ base_path }}/files/cv.pdf" 
          style="width: 100%; height: 800px; border: 1px solid #ddd; border-radius: 3px;"
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

<table style="width: 100%; color: #2c3e50; border-collapse: collapse; margin: 1em 0;">
  <thead>
    <tr style="border-bottom: 2px solid #ecf0f1;">
      <th style="padding: 0.8em; text-align: left; font-size: 1.2em; color: #2c3e50;">Degree</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.2em; color: #2c3e50;">Institution</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.2em; color: #2c3e50;">Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.8em; font-size: 1em;"><strong>Ph.D. in Computer Science</strong></td>
      <td style="padding: 0.8em; font-size: 1em;">National University of Singapore</td>
      <td style="padding: 0.8em; font-size: 1em;">2023 – present</td>
    </tr>
    <tr>
      <td style="padding: 0.8em; font-size: 1em;"><strong>B.Comp. (1st Class Hons) in Computer Science</strong></td>
      <td style="padding: 0.8em; font-size: 1em;">National University of Singapore</td>
      <td style="padding: 0.8em; font-size: 1em;">2019 – 2023</td>
    </tr>
  </tbody>
</table>

---

## Work Experience

<table style="width: 100%; color: #2c3e50; border-collapse: collapse; margin: 1em 0;">
  <thead>
    <tr style="border-bottom: 2px solid #ecf0f1;">
      <th style="padding: 0.8em; text-align: left; font-size: 1.2em; color: #2c3e50;">Position</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.2em; color: #2c3e50;">Institution</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.2em; color: #2c3e50;">Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.8em; font-size: 1em;"><strong>Research Engineer</strong></td>
      <td style="padding: 0.8em; font-size: 1em;">Singapore-MIT Alliance for Research and Technology Centre (SMART)</td>
      <td style="padding: 0.8em; font-size: 1em;">Aug 2023 – present</td>
    </tr>
    <tr>
      <td style="padding: 0.8em; font-size: 1em;"><strong>ML Engineer Intern</strong></td>
      <td style="padding: 0.8em; font-size: 1em;">TikTok</td>
      <td style="padding: 0.8em; font-size: 1em;">Mar 2021 – Mar 2022</td>
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
