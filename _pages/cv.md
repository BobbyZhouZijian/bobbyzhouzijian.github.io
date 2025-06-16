---
layout: archive
# title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="text-align: center; margin: 2em 0; padding: 1.5em; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
  <h2 style="color: white; margin-bottom: 1em; font-size: 1.5em;">📄 Curriculum Vitae</h2>
  <div style="display: flex; justify-content: center; gap: 1em; flex-wrap: wrap;">
    <a href="{{ base_path }}/files/cv.pdf" 
       style="display: inline-block; padding: 12px 24px; background: rgba(255,255,255,0.2); color: white; text-decoration: none; border-radius: 25px; border: 2px solid rgba(255,255,255,0.3); transition: all 0.3s ease; backdrop-filter: blur(10px);"
       onmouseover="this.style.background='rgba(255,255,255,0.3)'; this.style.transform='translateY(-2px)'"
       onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='translateY(0px)'">
      <i class="fas fa-download"></i> Download CV (PDF)
    </a>
    <a href="#" onclick="togglePreview(); return false;"
       style="display: inline-block; padding: 12px 24px; background: rgba(255,255,255,0.2); color: white; text-decoration: none; border-radius: 25px; border: 2px solid rgba(255,255,255,0.3); transition: all 0.3s ease; backdrop-filter: blur(10px);"
       onmouseover="this.style.background='rgba(255,255,255,0.3)'; this.style.transform='translateY(-2px)'"
       onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='translateY(0px)'">
      <i class="fas fa-eye"></i> Preview CV
    </a>
  </div>
</div>

<div id="cv-preview" style="display: none; margin: 2em 0; text-align: center; background: #f8f9fa; padding: 1em; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <div style="margin-bottom: 1em;">
    <button onclick="togglePreview()" style="background: #dc3545; color: white; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; transition: background 0.3s ease;" onmouseover="this.style.background='#c82333'" onmouseout="this.style.background='#dc3545'">
      <i class="fas fa-times"></i> Close Preview
    </button>
  </div>
  <iframe src="{{ base_path }}/files/cv.pdf" 
          style="width: 100%; height: 800px; border: 1px solid #ddd; border-radius: 5px;"
          title="CV Preview">
    <p>Your browser does not support PDFs. <a href="{{ base_path }}/files/cv.pdf">Download the PDF</a> instead.</p>
  </iframe>
</div>

<script>
function togglePreview() {
  var preview = document.getElementById('cv-preview');
  if (preview.style.display === 'none' || preview.style.display === '') {
    preview.style.display = 'block';
    preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    preview.style.display = 'none';
  }
}
</script>

## Education

<table style="width: 100%; color: #2c3e50; border-collapse: collapse; margin: 1em 0;">
  <thead>
    <tr style="border-bottom: 2px solid #ecf0f1;">
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #2c3e50;">Degree</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #2c3e50;">Institution</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #2c3e50;">Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.8em;"><strong>Ph.D. in Computer Science</strong></td>
      <td style="padding: 0.8em;">National University of Singapore</td>
      <td style="padding: 0.8em;">2023 – present</td>
    </tr>
    <tr>
      <td style="padding: 0.8em;"><strong>B.Comp. (1st Class Hons) in Computer Science</strong></td>
      <td style="padding: 0.8em;">National University of Singapore</td>
      <td style="padding: 0.8em;">2019 – 2023</td>
    </tr>
  </tbody>
</table>

---

## Work Experience

<table style="width: 100%; color: #2c3e50; border-collapse: collapse; margin: 1em 0;">
  <thead>
    <tr style="border-bottom: 2px solid #ecf0f1;">
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #2c3e50;">Position</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #2c3e50;">Institution</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #2c3e50;">Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.8em;"><strong>Research Engineer</strong></td>
      <td style="padding: 0.8em;">Singapore-MIT Alliance for Research and Technology Centre (SMART)</td>
      <td style="padding: 0.8em;">Aug 2023 – present</td>
    </tr>
    <tr>
      <td style="padding: 0.8em;"><strong>ML Engineer Intern</strong></td>
      <td style="padding: 0.8em;">TikTok</td>
      <td style="padding: 0.8em;">Mar 2021 – Mar 2022</td>
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
