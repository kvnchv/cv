module.exports = {
  name: 'Kevin Chu',
  title: 'PhD Candidate',
  dept: 'Materials Science - Georgia Tech',
  facts: {
    'Location': '<a href="https://goo.gl/maps/Y6UFDoKUzR5s1SMo8"><i class="fa fa-fw fa-map-marker-alt"></i>Atlanta, GA</a>',
    'Email': '<a href="mailto:kchu41@gatech.edu"><i class="fa fa-fw fa-envelope"></i>kchu41@gatech.edu</a>',
    'Google Scholar': '<a href="https://scholar.google.com/citations?user=HJXYzrYAAAAJ&hl=en"><i class="fa fa-fw fa-graduation-cap"></i>Kevin Chu</a>',
    'LinkedIn': '<a href="https://linkedin.com/in/chukgatech/"><i class="fab fa-fw fa-linkedin fact-icon"></i>Kevin Chu</a>',
    'GitHub': '<a href="https://github.com/kvnchv/"><i class="fab fa-fw fa-github fact-icon"></i>kvnchv</a>'
  },
  skills: [
    ['Software Development', '++++'],
    ['Computational Materials Science', '++++']
  ],
  jobs: [
    {
      institution: 'Georgia Institute of Technology',
      location: 'Atlanta, GA',
      position: 'Graduate Research Assistant - David L. McDowell Group',
      date: 'Aug 2018 - Present',
      badges: ['education', 'lammps','hpc', 'python', 'c++', 'fortran'],
      contents: `
I design and execute multiscale modeling experiments using LAMMPS and custom simulation codes to elucidate novel nanoscale deformation mechanisms in multicomponent alloys. 
This comprises:

* software development activities to improve or extend existing methods relevant to the [Concurrent Atomistic-Continuum (CAC)](http://pycac.org) method
* co-development of [LAMMPS-CAC](https://github.com/kvnchv/lammps) integration and validation
* simulation/analysis pipelining using a combination of shell and Python scripted workflows, interfacing with high performance computing clusters
* compilation of resultant data for the writing of manuscripts.
`
    },
    {
      institution: 'Sandia National Laboratories',
      location: 'Livermore, CA',
      position: 'Research & Development Graduate Intern',
      date: 'May 2019 - Aug 2019',
      badges: ['lammps', 'matlab', 'python', 'hpc'], 
      contents: `
Executed molecular dynamics modeling and data analysis activities to support the following projects: 

* Cottrell atomosphere formation kinetics
* large scale dislocation mobility analysis in 3XX stainless steels

Highlights include the development/implementation of a continuum-scale diffusion model and
fully pipelined execution and analysis of multi-parameter space molecular dynamics simulations.
`
    },
    {
      institution: 'Sandia National Laboratories',
      location: 'Livermore, CA',
      position: 'Undergraduate Research Intern',
      date: 'May 2017 - Aug 2017',
      badges: ['lammps', 'hpc'], 
      contents: `

* Analyzed existing datasets from molecular dynamics simulations of InGaN film deposition to investigate threading dislocation nucleation mechanisms 
and derived critical film thickness relations and parameters.
* Designed and executed simulations to validate melting temperature of newly developed interatomic potentials 
* Developed presentations for further internal dissemination and produced a number of visualizations for publication.
`
    },
    {
      institution: 'University of California, Los Angeles',
      location: 'Los Angeles, CA',
      position: 'Undergraduate Research Assistant - Jaime Marian Group',
      date: 'Mar 2016 - May 2017',
      badges: ['c++', 'matlab'], 
      contents: `I assisted with general research tasks relating to computational materials analysis and modelling. 
      Projects included translation of existing calculation/tools from Matlab into C++ (two temperature model, Green’s function, and Lennard-Jones potential calculations)
`
    }
  ],
  presentations: [
    {
      contents: 'Chu, K., Chen, D., Diaz, A., Selimov, A., Chen, Y., Zhu, T., McDowell, D. (2019). *Application of the concurrent atomistic-continuum (CAC) method to dislocation reaction pathway modeling in FCC metals.* at Materials Science and Technology, Portland, OR',
    }
  ],
  publications: [
    {
      contents: `
### 2020
* Chu, K., Foster, M. E., Sills, R. B., Zhou, X., Zhu, T., & McDowell, D. L. (2020). Temperature and composition dependent screw dislocation mobility in austenitic stainless steels from large-scale molecular dynamics. npj Computational Materials, 6(1), 1-10.
* Spataru, C.D., Chu, K., Sills, R.B. Zhou, X. (2020). Molecular Statics Analyses of Thermodynamics and Kinetics of Hydrogen Cottrell Atmosphere Formation Around Edge Dislocations in Aluminum. JOM 72, 3020–3027 .
### 2018
* Chu, K., Gruber, J., Zhou, X. W., Jones, R. E., Lee, S. R., & Tucker, G. J. (2018). Molecular dynamics studies of InGaN growth on nonpolar (11 2¯ 0) GaN surfaces. Physical Review Materials, 2(1), 013402.
### 2017
* Zhou, X. W., Jones, R. E., & Chu, K. (2017). Polymorphic improvement of Stillinger-Weber potential for InGaN. Journal of Applied Physics, 122(23), 235703.`
    }
  ],
  teaching: [
    {
      title: 'CIRTL Associate',
      location: 'Georgia Institute of Technology',
      date: 'Awarded Fall 2020',
      contents: `
Completed foundational level [Tech to Teaching](https://ctl.gatech.edu/content/tech-teaching-0) certifications under with Georgia Tech Center for Teaching and Learning (CTL).

* Fundamentals of Teaching and Learning
* Course Design
`,
      file: 'cirtl2020.pdf'
    },
    {
      title: "MSE Department Teaching Assitantship",
      location: 'Georgia Institute of Technology',
      date: 'Fall 2018-Present',
      contents: `
Teaching assistant for the following courses: 

  * MSE 2001 - Principles and Applications of Engineering Materials (2018, 2019, 2020)
  * MSE 3005 - Mechanical Behavior of Materials (2020)
  `
    },
    {
      title: "Teaching Practicum",
      location: 'Georgia Institute of Technology',
      date: 'Fall 2019',
      contents: `
Graduate-level course covering topics relevant to the skillset and mindset required for a faculty career path.

* Delivered lecture materials for a module with the support of a dedicated faculty teaching mentor (MSE 3005).
* Developed take-home assignments as well as a exam materials relevant to the delivered course segment 
  `
    }
  ]
};
