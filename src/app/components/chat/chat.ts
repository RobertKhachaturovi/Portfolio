import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuestionAnswer {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css'],
})
export class ChatComponent {
  isOpen = false;
  selectedQuestionAnswer: QuestionAnswer | null = null;

  gmailAddress = 'khachaturovirobert@gmail.com';

  questionAnswers: QuestionAnswer[] = [
    {
      question: 'როგორ შემიძლია თქვენთან დაკავშირება?',
      answer:
        'ჩემთან დაკავშირება შეგიძლიათ Gmail-ის საშუალებით. დააჭირეთ ქვემოთ მოცემულ ღილაკს, რომ გამომიგზავნოთ წერილი.',
    },
    {
      question: 'რა ტექნოლოგიები გიყენებიათ პროექტებში?',
      answer:
        'ჩემს პროექტებში ვიყენებ Angular, TypeScript, HTML, CSS, JavaScript-ს. ასევე სწავლობ C# Back-End-ს. დეტალურად შეგიძლიათ გაეცნოთ პორტფოლიო გვერდზე ან დამიწერეთ Gmail-ზე.',
    },
    {
      question: 'რამდენი ხანია პროგრამირებაში?',
      answer:
        '1+ წლიანი გამოცდილება მაქვს Full Stack Development-ში. ვმუშაობ Angular-ზე Front-End Development-ში და სწავლობ C# Back-End-ს.',
    },
    {
      question: 'იღებთ ახალ პროექტებს?',
      answer:
        'დიახ, ღია ვარ ახალ პროექტებისთვის! თუ გაქვთ იდეა ან პროექტი, რომელზეც გსურთ თანამშრომლობა, დამიწერეთ Gmail-ზე და დეტალურად განვიხილავთ.',
    },
    {
      question: 'როგორია თქვენი პროექტის შეფასების პროცესი?',
      answer:
        'პროექტის შეფასებისთვის დამიკავშირდით Gmail-ზე. განვიხილავთ თქვენს მოთხოვნებს, შევაფასებთ პროექტს და გამოგიგზავნით დეტალურ შეთავაზებას.',
    },
    {
      question: 'რა ღირს ვებ-საიტის შექმნა?',
      answer:
        'ფასი დამოკიდებულია პროექტის სირთულესა და მოთხოვნებზე. დამიკავშირდით Gmail-ზე თქვენი პროექტის დეტალებით და მოგცემთ ზუსტ შეფასებას.',
    },
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.selectedQuestionAnswer = null;
    }
  }

  selectQuestion(qa: QuestionAnswer) {
    this.selectedQuestionAnswer = qa;
  }

  sendViaGmail(question: string, answer: string) {
    const subject = encodeURIComponent(question);
    const body = encodeURIComponent(
      `გამარჯობა,\n\nკითხვა: ${question}\n\nპასუხი: ${answer}\n\nგსურთ დამატებითი ინფორმაცია? დამიწერეთ.\n\nპატივისცემით`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      this.gmailAddress
    )}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  }

  goBack() {
    this.selectedQuestionAnswer = null;
  }

  closeChat() {
    this.isOpen = false;
    this.selectedQuestionAnswer = null;
  }
}
