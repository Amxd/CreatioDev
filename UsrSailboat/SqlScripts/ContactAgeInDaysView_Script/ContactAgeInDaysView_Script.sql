CREATE OR ALTER VIEW UsrViewContactAgeInDays
as
select Id as UsrId, Name as UsrName, BirthDate as UsrBirthDate,
datediff(day, BirthDate, getdate()) as UsrAgeDays,
Id as UsrParentContactId
From Contact