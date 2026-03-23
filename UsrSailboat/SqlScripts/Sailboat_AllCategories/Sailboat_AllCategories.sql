CREATE OR ALTER VIEW UsrViewSailboatCategories
as
SELECT 
    SB.Id AS UsrId,
    STRING_AGG(SBC.Name, ', ') WITHIN GROUP (ORDER BY SBC.Name ASC) AS UsrSailboatCategories,
    SB.Id as UsrParentSailboatId
FROM UsrSailboat SB
INNER JOIN UsrSailboatCategoriesStorage SBCS ON SB.Id = SBCS.UsrParentSailboatId
INNER JOIN UsrSailboatCategory SBC ON SBC.Id = SBCS.UsrCategoryId
GROUP BY 
    SB.Id