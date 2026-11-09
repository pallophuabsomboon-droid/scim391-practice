/* =====================================================================
   Practice site - THE ONLY FILE YOU NORMALLY NEED TO EDIT BY HAND
   Fill in the values below (see SETUP_GUIDE.md, step F), then save.
   ===================================================================== */
window.SCIM_CONFIG = {

  // 1) Supabase -> Project Settings -> Data API -> Project URL
  SUPABASE_URL: "https://dyvrazeqoomnixjzgxbe.supabase.co",

  // 2) Supabase -> Project Settings -> API Keys -> anon public (or Publishable key)
  //    This key is safe to publish. NEVER paste the "service_role" / secret key here.
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnJhemVxb29tbml4anpneGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQyMTk4MzksImV4cCI6MjEwOTc5NTgzOX0.W32QN5dDtl3Kli0d7R6ZRiO2gtqJt5YD6Nz9pjSfycs",

  // 3) Only e-mails ending with these domains are allowed in.
  //    Example for Mahidol University:
  //    "student.mahidol.ac.th", "student.mahidol.edu", "mahidol.ac.th", "mahidol.edu"
  ALLOWED_DOMAINS: [
    "student.mahidol.ac.th",
    "student.mahidol.edu",
    "mahidol.ac.th",
    "mahidol.edu"
  ],

  // 4) Wording shown in the page header
  COURSE_CODE: "SCIM 391",
  COURSE_NAME: "Data Structure in Mathematics",

  // 5) How many seconds a student's program may run before we stop it
  RUN_TIMEOUT_SECONDS: 6
};
