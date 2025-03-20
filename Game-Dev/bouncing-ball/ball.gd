extends RigidBody2D

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass

func _on_death_body_entered(body: Node2D) -> void:
	$"../Label".visible = true;
	$"../Button".visible = true;

func _on_button_pressed() -> void:
	get_tree().reload_current_scene();

var collision_count = 0;
func _on_body_entered(body):
	collision_count += 1;
	$"../Label2".text = "Bounced %d times" % collision_count;
