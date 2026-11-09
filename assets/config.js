/* =====================================================================
   Practice site - THE ONLY FILE YOU NORMALLY NEED TO EDIT BY HAND
   Fill in the values below (see SETUP_GUIDE.md, step F), then save.
   ===================================================================== */
window.SCIM_CONFIG = {

  // 1) Supabase -> Project Settings -> Data API -> Project URL
  SUPABASE_URL: "https://PASTE-YOUR-PROJECT-ID.supabase.co",

  // 2) Supabase -> Project Settings -> API Keys -> anon public (or Publishable key)
  //    This key is safe to publish. NEVER paste the "service_role" / secret key here.
  SUPABASE_ANON_KEY: "PASTE-YOUR-ANON-KEY",

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
