<?php

namespace App\Http\Controllers\Appointment;

use App\Appointment;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CreateAppointmentController extends Controller
{

    protected function index(Request $request)
    {
        $formData = $request->all();

        $validator = Validator::make($formData, [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'max:1000'],
        ]);

        if ($validator->passes()) {
            $this->create($formData);

            return redirect('/')
                ->with('success', 1);
        } else {
            return redirect('/')
                ->withErrors($validator)
                ->withInput();
        }
    }

    protected function create(array $data)
    {
        return Appointment::create([
            'code' => str_random(5),
            'title' => $data['title'],
            'description' => $data['description'],
            'attendant_name' => 'test',
            'attendant_email' => 'test@test.com',
        ]);
    }
}
