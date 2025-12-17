(function(global){var Language = {};

Language.pluralFormFunction = function (n) {
		if (n == 1) {
			return 'one';
		}

		if (n == (n | 0) && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) {
			return 'few';
		}

		return 'other';
	};


Language.bubble = Language.bubble || {};

Language.bubble.attention_grabber = {
	"message": "Element przyciągający uwagę do czatu"
};


Language.chat = Language.chat || {};

Language.chat.Warning = {
	"message": "Ostrzeżenie"
};
Language.chat.accept_call = {
	"message": "Akceptuj"
};
Language.chat.active = {
	"message": "Aktywny"
};
Language.chat.agent_profile_image = {
	"message": "Obraz profilowy przedstawiciela"
};
Language.chat.agent_ringing = {
	"message": "Połączenie przychodzące"
};
Language.chat.all_conversations = {
	"message": "Zobacz wszystkie rozmowy"
};
Language.chat.call_end_details = {
	"message": "Początek o #startedOn i trwała #duration",
	"vars": [
		"startedOn",
		"duration"
	]
};
Language.chat.call_error_load = {
	"message": "Nie można załadować szczegółów połączenia."
};
Language.chat.call_started_on = {
	"message": "Początek o #startedOn",
	"vars": [
		"startedOn"
	]
};
Language.chat.chatEnded = {
	"message": "Czat się zakończył"
};
Language.chat.chat_icon = {
	"message": "Ikonka czatu"
};
Language.chat.chat_qm = {
	"message": "Pogadamy?"
};
Language.chat.chat_text = {
	"message": "Czat"
};
Language.chat.close_icon = {
	"message": "Ikonka zamknięcia"
};
Language.chat.completed_call = {
	"message": "Rozmowa zakończona"
};
Language.chat.conversation_ended_on = {
	"message": "Rozmowa zakończona"
};
Language.chat.decline_call = {
	"message": "Odrzuć"
};
Language.chat.defaultName = {
	"message": "Ty (zmień nazwę)"
};
Language.chat.departmentIsAway = {
	"message": "Dział #strongStart #departmentName #strongEnd jest obecnie nieosiągalny.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.departmentIsOffline = {
	"message": "Dział #strongStart #departmentName #strongEnd jest obecnie niedostępny. Możesz być obsługiwany przez inny dział.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.download = {
	"message": "Pobierz"
};
Language.chat.downloadFile = {
	"message": "Pobierz plik"
};
Language.chat.dragDropText = {
	"message": "Przesuń i Upuść pliki tutaj"
};
Language.chat.emoji_error_load = {
	"message": "Nie można wczytać emoji"
};
Language.chat.error_title = {
	"message": "Błąd"
};
Language.chat.failed = {
	"message": "Błąd"
};
Language.chat.generalUploadError = {
	"message": "\"#fileName\", spróbuj ponownie.",
	"vars": [
		"fileName"
	]
};
Language.chat.generalUploadErrorLabel = {
	"message": "Nie można przesłać plików"
};
Language.chat.goToLatest = {
	"message": "Idź do ostatniego"
};
Language.chat.hideButton = {
	"message": "Schowaj czat"
};
Language.chat.incoming_call_message = {
	"message": "Połączenie przychodzące z #name",
	"vars": [
		"name"
	]
};
Language.chat.insert_emoji = {
	"message": "Wstaw emoji"
};
Language.chat.justNow = {
	"message": "Przed chwilą"
};
Language.chat.limit2 = {
	"message": "Maksymalny rozmiar pliku to 2MB dla przeglądarek mobilnych, proszę przesłać mniejszy plik."
};
Language.chat.limit50 = {
	"message": "Maksymalny rozmiar pliku wynosi 50MB, proszę przesłać mniejszy plik."
};
Language.chat.message_not_delivered = {
	"message": "Wiadomości nie dostarczono, kliknij tutaj by wysłać ponownie."
};
Language.chat.message_too_long = {
	"message": "Długość wiadomości nie może przekraczać 500 znaków"
};
Language.chat.missed_agent = {
	"message": "Rozmowa nie została odebrana"
};
Language.chat.missed_visitor = {
	"message": "Nieodebrane połączenie"
};
Language.chat.missed_visitor_messagePreview = {
	"message": "Nieodebrane połączenie od"
};
Language.chat.mobileName = {
	"message": "Ty"
};
Language.chat.newChat = {
	"message": "Rozpocznij nową rozmowę"
};
Language.chat.newMessages = {
	"message": "Nowe wiadomości"
};
Language.chat.new_conversation = {
	"message": "Nowa rozmowa"
};
Language.chat.notificationTitle = {
	"message": "powiadomienie"
};
Language.chat.ongoing_call = {
	"message": "Bieżące połączenie"
};
Language.chat.past = {
	"message": "#time temu",
	"vars": [
		"time"
	]
};
Language.chat.pasted_image_title = {
	"message": "Wklejono obraz o #dateTime",
	"vars": [
		"dateTime"
	]
};
Language.chat.profile_prechat_text = {
	"message": "Wypełnij poniższy formularz, aby rozpocząć rozmowę ze mną."
};
Language.chat.rejected_call = {
	"message": "Odrzucono to połączenie"
};
Language.chat.remove_rate = {
	"message": "Usunąłeś ocenę dla tej rozmowy"
};
Language.chat.resend = {
	"message": "Wyślij ponownie"
};
Language.chat.retry = {
	"message": "Ponów próbę."
};
Language.chat.return_to_live_chat = {
	"message": "Powróć do czatu"
};
Language.chat.say_something = {
	"message": "Napisz odpowiedź.."
};
Language.chat.screen_share_error = {
	"message": "Udostępnianie ekranu jest niedostępne."
};
Language.chat.send_mail = {
	"message": "Wyślij email"
};
Language.chat.sent_file = {
	"message": "Wysłano plik"
};
Language.chat.sent_form = {
	"message": "Sent a form"
};
Language.chat.sent_suggested_message = {
	"message": "Sent a suggested message"
};
Language.chat.today_time = {
	"message": "Dziś, #time",
	"vars": [
		"time"
	]
};
Language.chat.tryAgain = {
	"message": "Spróbuj ponownie."
};
Language.chat.unanswered = {
	"message": "Nie odebrano"
};
Language.chat.uploading = {
	"message": "Przesyłanie..."
};
Language.chat.video_call_error = {
	"message": "Połączenie wideo jest niedostępne."
};
Language.chat.visitor_ringing = {
	"message": "Łączenie..."
};
Language.chat.voice_call_error = {
	"message": "Połączenie głosowe jest niedostępne."
};
Language.chat.we_are_live = {
	"message": "Jesteśmy gotowi do rozmowy z Tobą. Napisz coś, aby rozpocząć czat na żywo."
};


Language.days = Language.days || {};

Language.days['0'] = {
	"message": "Niedziela"
};
Language.days['1'] = {
	"message": "Poniedziałek"
};
Language.days['2'] = {
	"message": "Wtorek"
};
Language.days['3'] = {
	"message": "Środa"
};
Language.days['4'] = {
	"message": "Czwartek"
};
Language.days['5'] = {
	"message": "Piątek"
};
Language.days['6'] = {
	"message": "Sobota"
};


Language.form = Language.form || {};

Language.form.CancelButton = {
	"message": "Anuluj"
};
Language.form.CloseButton = {
	"message": "Zamknij"
};
Language.form.DepartmentsErrorMessage = {
	"message": "Dział jest wymagany."
};
Language.form.DepartmentsPlaceholder = {
	"message": "wybierz dział"
};
Language.form.EmailErrorMessage = {
	"message": "Nieprawidłowy adres email."
};
Language.form.EmailPlaceholder = {
	"message": "Adres e-mail"
};
Language.form.EmailTranscriptFormMessage = {
	"message": "Prosimy o wypełnienie poniższego formularza, aby ta rozmowa była wysłana na Twój adres e-mail."
};
Language.form.EmailTranscriptSuccess = {
	"message": "Wysłano prośbę o transkrypcję e-maila."
};
Language.form.EmailTranscriptTo = {
	"message": "Wyślij kopię rozmowy na e-mail"
};
Language.form.EndChatMessage = {
	"message": "Dziękujemy za rozmowę z nami. Zapraszamy do rozpoczęcia nowej sesji czatu lub wpisania swojego adres e-mail, na który wyślemy zapis tej rozmowy."
};
Language.form.EndChatMessage2 = {
	"message": "Dziękujemy za rozmowę. Jeśli chcesz, możesz rozpocząć nową sesję czatu."
};
Language.form.subject = {
	"message": "Temat"
};
Language.form.RequestSent = {
	"message": "Twoja prośba została wysłana"
};
Language.form.EndChatTitle = {
	"message": "Czy na pewno chcesz zakończyć ten czat?"
};
Language.form.MessagePlaceholder = {
	"message": "twoja wiadomość"
};
Language.form.NameErrorMessage = {
	"message": "Podaj swoje imię."
};
Language.form.NameFormMessage = {
	"message": "Ustaw proszę swoje imię, abyśmy mogli rozpoznać Cię w przyszłości."
};
Language.form.OfflineFormMessage = {
	"message": "Wypełnij poniższe pola - skontaktujemy się z Tobą tak szybko, jak będzie to możliwe."
};
Language.form.OfflineMessageNotSent = {
	"message": "Nie udało się wysłać wiadomości, spróbuj ponownie"
};
Language.form.OfflineMessageSent = {
	"message": "Wiadomość została wysłana!"
};
Language.form.PhoneErrorMessage = {
	"message": "Nieprawidłowy numer telefonu"
};
Language.form.PreChatFormMessage = {
	"message": "Wypełnij proszę poniższe pola, aby móc zacząć konwersację."
};
Language.form.PreChatFormMessageProfile = {
	"message": "Wypełnij proszę poniższe pola, aby zacząć rozmowę z #name."
};
Language.form.QuestionPlaceholder = {
	"message": "twoje zapytanie"
};
Language.form.RequiredErrorMessage = {
	"message": "Pole wymagane"
};
Language.form.SaveButton = {
	"message": "Zapisz"
};
Language.form.SendButton = {
	"message": "Wyślij"
};
Language.form.SendMessage = {
	"message": "Wyślij wiadomość"
};
Language.form.StartChatButton = {
	"message": "Rozpocznij czat"
};
Language.form.SubmitButton = {
	"message": "Wyślij"
};
Language.form.SubmittedFrom = {
	"message": "Zgłoszone przez"
};
Language.form.SubmittingProcess = {
	"message": "Złożenie"
};
Language.form.TranscriptMessage = {
	"message": "Możesz wysłać zapis rozmowy na swój adres e-mail."
};
Language.form.any = {
	"message": "Wszystkie"
};
Language.form.chatEnded = {
	"message": "Czat się zakończył"
};
Language.form.department = {
	"message": "Dział"
};
Language.form.email = {
	"message": "Adres e-mail"
};
Language.form.errorSaving = {
	"message": "Zapisywanie nie powiodło się. Spróbuj jeszcze raz"
};
Language.form.message = {
	"message": "Wiadomość"
};
Language.form.name = {
	"message": "Nazwa"
};
Language.form.sendAgain = {
	"message": "Wyślij ponownie"
};
Language.form.visitButton = {
	"message": "Odwiedź tawk.to"
};


Language.home = Language.home || {};

Language.home.banner_image = {
	"message": "Obraz banera"
};
Language.home.chat_button = {
	"message": "Nowa rozmowa"
};
Language.home.chat_input = {
	"message": "Napisz tutaj i wciśnij Enter..."
};
Language.home.heading_main = {
	"message": "Cześć 👋"
};
Language.home.heading_sub = {
	"message": "Potrzebujesz pomocy? Poszukaj odpowiedzi w naszym centrum pomocy lub zacznij rozmowę:"
};
Language.home.kb_search = {
	"message": "Szukaj odpowiedzi"
};
Language.home.logo_image = {
	"message": "Obraz logo"
};


Language.kb = Language.kb || {};

Language.kb.article_image = {
	"message": "Obraz artykułu"
};
Language.kb.article_rating = {
	"message": "Czy ten artykuł był przydatny?"
};
Language.kb.article_rating_count = {
	"message": "#totalLikes z #totalVotes osób lubi ten artykuł",
	"vars": [
		"totalLikes",
		"totalVotes"
	]
};
Language.kb.author_profile_image = {
	"message": "Obraz profilowy autora"
};
Language.kb.clear_search = {
	"message": "Wyczyść wyszukiwanie"
};
Language.kb.downvote_rating_button = {
	"message": "Nie"
};
Language.kb.help_center = {
	"message": "Centrum pomocy"
};
Language.kb.negative_rating = {
	"message": "Negatywne"
};
Language.kb.positive_rating = {
	"message": "Pozytywne"
};
Language.kb.recent_searches = {
	"message": "Niedawne wyszukiwania"
};
Language.kb.search_fail_description = {
	"message": "Spróbuj ponownie"
};
Language.kb.search_fail_title = {
	"message": "Brak wyników wyszukiwania"
};
Language.kb.search_placeholder = {
	"message": "Szukaj odpowiedzi"
};
Language.kb.search_results = {
	"message": "Wyniki wyszukiwania"
};
Language.kb.show_all_results = {
	"message": "Pokaż wszystkie wyniki (#num)",
	"vars": [
		"num"
	]
};
Language.kb.submit_search = {
	"message": "Wyślij wyszukiwanie"
};
Language.kb.upvote_rating_button = {
	"message": "Tak"
};
Language.kb.view_full = {
	"message": "Zobacz w całości"
};


Language.menu = Language.menu || {};

Language.menu.add_chat_to_your_website = {
	"message": "Dodaj czat do Twojej strony"
};
Language.menu.change_name = {
	"message": "Zmień nazwę"
};
Language.menu.email_transcript = {
	"message": "Wyślij rozmowę na e-mail"
};
Language.menu.end_chat_session = {
	"message": "Zakończ sesję czatu"
};
Language.menu.popout_widget = {
	"message": "Otwórz w nowym oknie"
};
Language.menu.sound_off = {
	"message": "Dźwięk wyłączony"
};
Language.menu.sound_on = {
	"message": "Dźwięk włączony"
};


Language.months = Language.months || {};

Language.months['0'] = {
	"message": "Styczeń"
};
Language.months['1'] = {
	"message": "Luty"
};
Language.months['10'] = {
	"message": "Listopad"
};
Language.months['11'] = {
	"message": "Grudzień"
};
Language.months['2'] = {
	"message": "Marzec"
};
Language.months['3'] = {
	"message": "Kwiecień"
};
Language.months['4'] = {
	"message": "Maj"
};
Language.months['5'] = {
	"message": "Czerwiec"
};
Language.months['6'] = {
	"message": "Lipiec"
};
Language.months['7'] = {
	"message": "Sierpień"
};
Language.months['8'] = {
	"message": "Wrzesień"
};
Language.months['9'] = {
	"message": "Październik"
};


Language.notifications = Language.notifications || {};

Language.notifications.dismiss_alert = {
	"message": "Odrzuć alert"
};
Language.notifications.maximum_file_upload_warning = {
	"message": "Przepraszamy, przesyłany plik nie może być większy niż #limitFileNumber. Spróbuj skompresować poniższe pliki i wysłać ponownie:",
	"vars": [
		"limitFileNumber"
	]
};
Language.notifications.maximum_size_upload_warning = {
	"message": "Przepraszamy, pojedyńczy plik nie może być większy od #limitFileSize. Proszę skompresuj swój/e plik/i i spróbuj ponownie.",
	"vars": [
		"limitFileSize"
	]
};
Language.notifications.reconnecting = {
	"message": "Ponowne łączenie"
};
Language.notifications.retry = {
	"message": "Ponów próbę"
};


Language.overlay = Language.overlay || {};

Language.overlay.cookiesOff = {
	"message": "Nie możesz użyć tego czatu, ponieważ masz wyłączoną obsługę \"ciasteczek\". Włącz ją i odśwież stronę."
};
Language.overlay.inactive = {
	"message": "Kliknij tutaj, aby ponownie zainicjalizować czat"
};
Language.overlay.maintenance = {
	"message": "Na czacie trwają prace konserwacyjne"
};
Language.overlay.tawkContent = {
	"message": "Ten widżet powstał dzięki tawk.to - darmowej aplikacji do komunikacji, która pozwala monitorować i wchodzić w interakcje z odwiedzającymi twoją stronę internetową."
};


Language.rollover = Language.rollover || {};

Language.rollover.back = {
	"message": "Wróć"
};
Language.rollover.chatMenu = {
	"message": "Menu"
};
Language.rollover.emailTranscriptOption = {
	"message": "Wyślij zapis rozmowy na e-mail"
};
Language.rollover.end = {
	"message": "Zakończ czat"
};
Language.rollover.knowledgeBase = {
	"message": "Baza wiedzy"
};
Language.rollover.maximize = {
	"message": "Maksymalizuj"
};
Language.rollover.minimize = {
	"message": "Zminimalizuj"
};
Language.rollover.negativeRating = {
	"message": "Oceń tę rozmowę na -1"
};
Language.rollover.popOut = {
	"message": "Otwórz w nowym oknie"
};
Language.rollover.positiveRating = {
	"message": "Oceń tę rozmowę na +1"
};
Language.rollover.rateChat = {
	"message": "Oceń ten czat"
};
Language.rollover.resendMessage = {
	"message": "Wyślij wiadomość ponownie"
};
Language.rollover.resize = {
	"message": "Zmień rozmiar"
};
Language.rollover.screenShare = {
	"message": "Udostępnianie ekranu"
};
Language.rollover.uploadFile = {
	"message": "Prześlij plik"
};
Language.rollover.videoCall = {
	"message": "Rozmowy wideo"
};
Language.rollover.voiceCall = {
	"message": "Połączenie głosowe"
};


Language.routes = Language.routes || {};

Language.routes.all_agents = {
	"message": "Wszyscy przedstawiciele"
};
Language.routes.conversations = {
	"message": "Rozmowy"
};
Language.routes.load_more = {
	"message": "Wczytaj więcej"
};


Language.status = Language.status || {};

Language.status.away = {
	"message": "Z dala"
};
Language.status.offline = {
	"message": "Niedostępny"
};
Language.status.online = {
	"message": "Online"
};




Language.chat = Language.chat || {};

Language.chat.hours = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num godzina",
		"few": "#num godziny",
		"many": "#num godziny",
		"other": "#num godzin"
	}
};
Language.chat.messageQueuedText = {
	"pluralVars": [
		"t"
	],
	"message": {
		"one": "Szacowany czas oczekiwania wynosi #strongStart #t minutę #strongEnd",
		"few": "Szacowany czas oczekiwania wynosi #strongStart #t minuty #strongEnd",
		"many": "Szacowany czas oczekiwania wynosi #strongStart #t minut #strongEnd",
		"other": "Szacowany czas oczekiwania wynosi #strongStart #t minut #strongEnd"
	},
	"vars": [
		"strongStart",
		"strongEnd"
	]
};
Language.chat.minutes = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num minuta",
		"few": "#num minuty",
		"many": "#num minut",
		"other": "#num minut"
	}
};
Language.chat.newMessage = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num nowa wiadomość",
		"few": "#num nowe wiadomości",
		"many": "#num nowe wiadomości",
		"other": "#num nowych wiadomości"
	}
};
Language.chat.seconds = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num sekunda",
		"few": "#num sekundy",
		"many": "#num sekund",
		"other": "#num sekund"
	}
};


global.$_Tawk.language = Language;})(window);