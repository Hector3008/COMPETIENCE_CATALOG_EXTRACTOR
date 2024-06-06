1) para pushear a GitHub desde una secundary branch se debe usar el siguiente comando:

  git push --set-upstream origin sb_extractor

  (sb_extractor es el nombre de la secundary branch)

2) para agregar los features de un secundary branch debo ubicarme en mi main branch y pedir un merge del secundary branch. Ejemplo:

  git checkout main
  git pull origin main
  git merge sb_extractor
  git push origin main

  and its over
2) 2) para agregar los features de un secundary branch debo ubicarme en mi main branch y pedir un merge del secundary branch. Ejemplo:

  git checkout main
  git pull origin main
  git merge sb_extractor
  git push origin main

  and its over