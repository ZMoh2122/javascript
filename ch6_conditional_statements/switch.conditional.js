function findAcademicYear(age) {
  let academicYear;

  switch (age) {
    case 4:
      academicYear = "Reception";
      break;
    case 5:
      academicYear = "Year 1";
      break;
    case 6:
      academicYear = "Year 2";
      break;
    case 7:
      academicYear = "Year 3";
      break;
    case 8:
      academicYear = "Year 4";
      break;
    case 9:
      academicYear = "Year 5";
      break;
    case 10:
      academicYear = "Year 6";
      break;
    case 11:
      academicYear = "Year 7";
      break;
    case 12:
      academicYear = "Year 8";
      break;
    case 13:
      academicYear = "Year 9";
      break;
    case 14:
      academicYear = "Year 10";
      break;
    case 15:
      academicYear = "Year 11";
      break;
    case 16:
      academicYear = "Year 12";
      break;
    case 17:
      academicYear = "Year 13";
      break;
    default:
      if (age >= 18) academicYear = "University";
      else academicYear = "Too young for school";
  }

  return academicYear;
}
