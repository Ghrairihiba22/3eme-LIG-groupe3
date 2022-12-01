package com.example.login;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class login extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        final EditText phone = findViewById(R.id.phone);
        final EditText password = findViewById(R.id.password);
        final Button loginbtn = findViewById(R.id.loginbtn);
        final TextView registernowbtn = findViewById(R.id.registernowbtn);

        loginbtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                final String phonetext= phone.getText().toString();
                final String passwordtext= password.getText().toString();

                if (phonetext.isEmpty() || passwordtext.isEmpty()){
                    Toast.makeText( context: Login.this, text: "please enter your mobile or password",Toast.LENGTH_SHORT).show();
                }
                else {

            }
        });
    }
}