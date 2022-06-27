SELECT
  AVG(likes) AS likes,
  AVG(passes) AS passes,
  AVG(matches) AS matches,
  sexualOrientations
FROM
  (
  SELECT 
    LikesPasses.likes,
    LikesPasses.passes,
    Matches.matches,
    REPLACE(REPLACE(LikesPasses.sexualOrientations, '"', ""), ",", " | ") as sexualOrientations
  FROM
    (
      SELECT dateValue,
        SUM(CASE WHEN HerLikeSkip.action = 'Like' THEN HerLikeSkip.count ELSE 0 END) likes,
        SUM(CASE WHEN HerLikeSkip.action = 'Skip' THEN HerLikeSkip.count ELSE 0 END) passes,
        SUBSTR(HerLikeSkip.FilePath, 0, INSTR(HerLikeSkip.FilePath, '_')) AS app, 
        'qur' as sexualOrientations,
          SUBSTR(FilePath, 0, INSTR(FilePath, '/')) AS userId
      FROM HerLikeSkip
      GROUP BY dateValue, FilePath
    ) as LikesPasses,
    (
      SELECT SUBSTR(likedAt, 0, INSTR(likedAt, ' ')) AS dateValue, 
        COUNT(HerLikeMatch.matched) as matches,
        SUBSTR(FilePath, 0, INSTR(FilePath, '/')) AS userId
      FROM HerLikeMatch
      WHERE HerLikeMatch.matched = "true"
      GROUP BY dateValue, FilePath
    ) as Matches
  WHERE Matches.dateValue = LikesPasses.dateValue
    AND Matches.userId = LikesPasses.userId

  UNION ALL

  SELECT likes, 
    passes, 
    matches, 
    REPLACE(REPLACE(REPLACE(REPLACE(sexualOrientations, '"', ""), ",", " | "), "[", ""), "]", "") as sexualOrientations
  FROM TinderUsage, TinderOrientation
  WHERE SUBSTR(TinderUsage.FilePath, 0, INSTR(TinderUsage.FilePath, '/')) = SUBSTR(TinderOrientation.FilePath, 0, INSTR(TinderOrientation.FilePath, '/'))
  )
GROUP BY
  sexualOrientations
