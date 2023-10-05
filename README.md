# Handling RTK Query for this project

- যখন user login করবে তখনি তার **email** আর **role:""** অটোমেটিক database এ **POST** request পাঠিয়ে একটা user create করবে
- শুরুতে **POST** request এ কেবল **email** আর **role** দেবার কারন হচ্ছে আমরা navbar এ role এর basis এ কিছু route দেখাতে চাই। যেমন যদি **role** থাকে তাহলে **Dashboard** দেখাব আর নইলে **Get Registered** দেখাব
- তারপর যখন user **employer** অথবা **candidate** হিসেবে login করবে তখন user এর **\_id** ধরে **PATCH** request পাঠিয়ে user এর details update করে একটা পূর্নাংগ user-information database এ update হবে

## points need to be considered

- user যদি **role** না থাকে তাহলে login এর পর তাকে **Get Registered** এ নিয়ে যেতে হবে
- আর user যদি already **role** থাকে তাহলে login এর পর তাকে dashboard এ নিয়ে যেতে হবে
