INSERT INTO technologies (name, category, display_order)
VALUES
  ('JavaScript', 'Languages', 1),
  ('Python', 'Languages', 2),

  ('React', 'Frontend', 1),
  ('HTML', 'Frontend', 2),
  ('CSS', 'Frontend', 3),

  ('Node.js', 'Backend', 1),
  ('Express', 'Backend', 2),
  ('Django', 'Backend', 3),
  ('Django REST Framework', 'Backend', 4),

  ('PostgreSQL', 'Database', 1),

  ('Git', 'Tools', 1),
  ('GitHub', 'Tools', 2)
  ON CONFLICT (name) DO NOTHING;
