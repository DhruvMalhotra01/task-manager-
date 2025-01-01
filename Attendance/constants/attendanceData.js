// Attendance data stored in a separate file
const attendanceData = {
  '2024-10-23': [
        { name: 'Bogus Fikri', id: '34536448', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Indizen', id: '34536419', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' },
        { name: 'Andrew Davilla', id: '34536449', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZR6Gs7vDfFNNMsCAc2pNG0LaG3xAgnZDapQ&s', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Carlie Sanz', id: '34536416', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbspSuAlbAFC2RqZweFBTjOF4cWY9gizRbQKEzzLE0QdxIKrV5E-iZipiZxcdYyB7aTU&usqp=CAU', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' },
        { name: 'Micheal lorez', id: '34536459', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxapDwCeVLL0T69nhwV_BgqH9lztNDYQGhCbUVKHMgITKzGDlPsa55HS-6dqUdC8Qt5VU&usqp=CAU', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Christiano ', id: '34522416', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv0KmvZhSF8J706GgWKwILeGnSqVl8_dGFxK-m-N42wHGSChQmZuRTjkHNwR2fpkFnYk&usqp=CAU', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' }
    ],
  '2024-10-24': [
        { name: 'Bogus Fikri', id: '34536448', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Indizen', id: '34536419', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' },
        { name: 'Andrew Davilla', id: '34536449', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZR6Gs7vDfFNNMsCAc2pNG0LaG3xAgnZDapQ&s', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Carlie Sanz', id: '34536416', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbspSuAlbAFC2RqZweFBTjOF4cWY9gizRbQKEzzLE0QdxIKrV5E-iZipiZxcdYyB7aTU&usqp=CAU', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' },
        { name: 'Micheal lorez', id: '34536459', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxapDwCeVLL0T69nhwV_BgqH9lztNDYQGhCbUVKHMgITKzGDlPsa55HS-6dqUdC8Qt5VU&usqp=CAU', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Christiano ', id: '34522416', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv0KmvZhSF8J706GgWKwILeGnSqVl8_dGFxK-m-N42wHGSChQmZuRTjkHNwR2fpkFnYk&usqp=CAU', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' }
    ],
  '2024-10-25': [
        { name: 'Bogus Fikri', id: '34536448', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Indizen', id: '34536419', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' },
        { name: 'Andrew Davilla', id: '34536449', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZR6Gs7vDfFNNMsCAc2pNG0LaG3xAgnZDapQ&s', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Carlie Sanz', id: '34536416', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbspSuAlbAFC2RqZweFBTjOF4cWY9gizRbQKEzzLE0QdxIKrV5E-iZipiZxcdYyB7aTU&usqp=CAU', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' },
        { name: 'Micheal lorez', id: '34536459', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxapDwCeVLL0T69nhwV_BgqH9lztNDYQGhCbUVKHMgITKzGDlPsa55HS-6dqUdC8Qt5VU&usqp=CAU', clockIn: '10:02 AM', clockOut: '07:00 PM', duration: '6h 58m', overtime: '2h 12m', status: 'Late' },
        { name: 'Christiano ', id: '34522416', profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv0KmvZhSF8J706GgWKwILeGnSqVl8_dGFxK-m-N42wHGSChQmZuRTjkHNwR2fpkFnYk&usqp=CAU', clockIn: '09:30 AM', clockOut: '07:12 PM', duration: '6h 18m', overtime: 'None', status: 'Present' }
    ]
};
