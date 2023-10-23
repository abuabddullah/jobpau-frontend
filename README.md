# Handling RTK Query for this project

- যখন user login করবে তখনি তার **email** আর **role:""** অটোমেটিক **redux-state** এ **dispatch** করবে
- শুরুতে **redux-state** এ কেবল **email** আর **role** দেবার কারন হচ্ছে আমরা navbar এ role এর basis এ কিছু route দেখাতে চাই। যেমন যদি **role** থাকে তাহলে **Dashboard** দেখাব আর নইলে **Get Registered** দেখাব
- তারপর যখন user **employer** অথবা **candidate** হিসেবে login করবে তখন user কে **POST** request পাঠিয়ে user এর details করে একটা পূর্নাংগ user-information database এ save হবে

## points need to be considered

- user যদি **role** না থাকে তাহলে login এর পর তাকে **Get Registered** এ নিয়ে যেতে হবে
- আর user যদি already **role** থাকে তাহলে login এর পর তাকে dashboard এ নিয়ে যেতে হবে
