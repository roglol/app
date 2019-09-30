import React from 'react';

class Info extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render() {

    return (
        <div ref={this.myRef} className="info-wrapper">
            <div className="team">
                ვინ ვართ ჩვენ ისრაელის ტექჰაბი არის საგანმანათლებლო სასწავლო ცენტრი, რომელიც ახორციელებს უნიკალურ ფორმატს ციფრული მარკეტოლოგების  და IT-ის სპეციალისტების მომზადებაში, რომელიც გამოიყენება ისრაელის არმიაში. ჩვენი აკადემია მდებარეობს თბილისში, ამიტომ თქვენ არ დაგჭირდებათ საზღვარგარეთ წასვლა  განათლების მისაღებად. ისრაელის ტექჰაბის განათლების ცენტრის გახსნის ინიციატორი არის Eran Lasser. მას აქვს უფროსი თანამდებობა მამრამში, ისრაელის IT სასწავლო ცენტრში არმიისთვის. სამხედრო სამსახურის დასრულების შემდგომ, ერანმა დაარსა და მართავდა კერძო სექტორს John Bryce Training-ს,  რომ მიღებული გამოცდილება სამოქალაქო სექტორშიც დაენერგა. დღესდღეობით John Bryce Training იკავებს ისრაელის IT ბაზრის 70% -ს და აქვს ფილიალები უნგრეთში, უკრაინაში, ჩინეთსა და თურქეთში. საქართველოში ისრაელის ტექჰაბი იარსებებს, როგორც ასეთი ცენტრის ანალოგი.
                    ჩვენ ვადაპტირდებით ისრაელის Telem მეთოდოლოგიით, რომელიც შექმნილია იმისათვის, რომ გავიგოთ თითოეული სტუდენტის ძლიერი მხარე და მათი მოტივაცია. ეს კურსი არის დაფუძნებული ქეისურ დავალებებზე და პრაქტიკულ სავარჯიშოებზე. მოსაწყენი ლექციების და დროის დაკარგვის გარეშე შეძლებთ მიიღოთ ამ სფეროში უმაღლესი განათლება. ჩვენ ვაყალიბებთ მრჩეველთა საბჭოს, რომლებმაც იციან, თუ რა სურს ბაზარს. მთელი კურსის განმავლობაში ჩვენ ვამზადებთ სტუდენტებს მომავალ სამუშაო გამოწვევებსა და სირთულეებზე, როგორც ვებ პროგრამისტებს და ციფრულ მარკეტოლოგებს. სპეციალურად მოწვეული ლექტორები ისრაელიდან დაეხმარებიან სტუდენტებს მიიღონ საერთაშორისო გამოცდილება.
                    ისრაელის ტექჰაბის განათლების ცენტრის გახსნის ინიციატორი არის Eran Lasser. მას აქვს უფროსი თანამდებობა მამრამში, ისრაელის IT სასწავლო ცენტრში არმიისთვის. სამხედრო სამსახურის დასრულების შემდგომ, ერანმა დაარსა და მართავდა კერძო სექტორს John Bryce Training-ს,  რომ  მიღებული გამოცდილება სამოქალაქო სექტორშიც დაენერგა.  დღესდღეობით John Bryce Training იკავებს ისრაელის IT ბაზრის 70% -ს და აქვს ფილიალები უნგრეთში, უკრაინაში, ჩინეთსა და თურქეთში. საქართველოში ისრაელის ტექჰაბი იარსებებს, როგორც ასეთი ცენტრის ანალოგი.
                    ჩვენ ვადაპტირდებით ისრაელის Telem მეთოდით, რომელიც შექმნილია იმისათვის, რომ გავიგოთ თითოეული სტუდენტის ძლიერი მხარე და მათი მოტივაცია. ეს პროგრამირების კურსი არის დაფუძნებული ქეისურ დავალებებზე და პრაქტიკულ სავარჯიშოებზე, მოსაწყენი ლექციების და დროის დაკარგვის გარეშე. ჩვენ ასევე ვაყალიბებთ მრჩეველთა საბჭოს, სადაც ჩვენ ვიწვევთ IT ინდუსტრიის ლიდერებს, რომლებმაც იციან, რა სურს ბაზარს. მთელი კურსის განმავლობაში ჩვენ ვამზადებთ სტუდენტებს მომავალ სამუშაო გამოწვევებსა და სირთულეებზე, როგორც ვებ პროგრამისტი.
            </div>
            <div className="about-us">
            რას გთავაზობთ
დაიწყეთ პროგრამირებისა და ციფრული მარკეტინგის შესწავლა ნულიდან 
მაშინაც კი, თუ თქვენ არასდროს გქონიათ შეხება პროგრამირებასთან და ციფრულ მარკეტინგთან, არ მიგიღიათ ტექნიკური განათლება , სათანადო სურვილის შემთხვევაში შეძლებთ ჩვენთან კურსის გავლას.
მოტივაცია და ჯგუფური მუშაობა 
კურსი მოგცემთ საშუალებას გახდეთ Front End დეველოპერები / ციფრული მარკეტოლოგები უმოკლეს დროში და აიმაღლოთ განათლება / გამოცდილება ამ სფეროში.
უნარ-ჩვევეების განვითარება 
ისრაელიდან სპეციალურად მოწვეული ლ;ექტორები დაგეხმარებათ მიიღოთ საერთაშორისო გამოცდილება და თეორიული ცოდნა, რაც საშუალებას მოგცემთ აიმაღლოთ თქვენი უნარ ჩვევები
კურსის მიზანი 
კურსის მიზანია, პროფესიონალი პროგრამისტებისა და მარკეტოლოგების გადამზადება, რომლებსაც შეეძლებათ მრავალსაფეხურიანი დავალებების გადაჭრა, კომპანიების განვითარების ხელშეწყობა ციფრულ სამომხმარებლო სივრცეში
            </div>
        </div>
    )
}
}

export default Info;